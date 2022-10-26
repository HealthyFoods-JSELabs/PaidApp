// ignore_for_file: avoid_print

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flueapp/services/models/fuel_model.dart';
import 'package:flueapp/services/models/user_model.dart';
import 'package:intl/intl.dart';

class FireDBHandeler {
  static final firestoreInstance = FirebaseFirestore.instance;
  static final user = FirebaseAuth.instance.currentUser;
  static String mainUserpath = "/users/" + user!.email.toString() + "/";
  static const String fcollectionpath = "fueldata";

//check doc is exists
  static Future<int> checkdocstatus(String collectionpath, String docid) async {
    var a = await FirebaseFirestore.instance
        .collection(collectionpath)
        .doc(docid)
        .get();
    if (a.exists) {
      print('Exists');
      return 0;
    } else if (!a.exists) {
      print('Not exists');
      return 1;
    } else {
      return 2;
    }
  }

//get user details

  static Future<UserModel> getUser() async {
    String uid = user!.uid.toString();
    const String collectionpath = "/users/";
    UserModel model;

    DocumentSnapshot documentSnapshot =
        await firestoreInstance.collection(collectionpath).doc(uid).get();
    model = UserModel.fromJson(documentSnapshot.data() as Map<String, dynamic>);
    return model;
  }

// add fuel
  static Future<int> addfuel(FuelModel fuelModel) async {
    int status = 0;

    await firestoreInstance
        .collection(fcollectionpath)
        .doc()
        .set(fuelModel.toMap())
        .then((_) async {
      status = 1;
      print("create fuel doc");
    });

    return status;
  }

// update fuel
  static Future<int> updatefuel(FuelModel fuelModel) async {
    int status = 1;
    if (status == 1) {
      await firestoreInstance
          .collection(fcollectionpath)
          .doc()
          .update(fuelModel.toMap())
          .then((_) async {
        print("update fuel doc");
      });
    } else {
      print(" doc not exsists");
    }
    return status;
  }
// get a fuel

  static Future<List<FuelModel>> getFuel(String vnumber, String date) async {
    List<FuelModel> list = [];
    FuelModel fuelModel;
    // QuerySnapshot

    final querySnapshot = await firestoreInstance
        .collection(fcollectionpath)
        .where("vnumber", isEqualTo: vnumber)
        .where("fueledDate", isEqualTo: date)
        .get();
    print(querySnapshot.docs);

    for (int i = 0; i < querySnapshot.docs.length; i++) {
      var a = querySnapshot.docs[i];
      // FuelModel = FuelModel.fromSnapshot(a);
      fuelModel = FuelModel.fromMap(a.data());
      list.add(fuelModel);
      print(fuelModel.toMap());
    }
    return list;
  }

  static Future<List<FuelModel>> getdHistory() async {
    List<FuelModel> list = [];
    FuelModel fuelModel;
    // QuerySnapshot
    String date = DateFormat.yMd().format(DateTime.now()).toString();
    final querySnapshot = await firestoreInstance
        .collection(fcollectionpath)
        .where("fueledDate", isEqualTo: date)
        .where("stationid", isEqualTo: user!.uid)
        .get();
    print(querySnapshot.docs);

    for (int i = 0; i < querySnapshot.docs.length; i++) {
      var a = querySnapshot.docs[i];
      // FuelModel = FuelModel.fromSnapshot(a);
      fuelModel = FuelModel.fromMap(a.data());
      list.add(fuelModel);
      print(fuelModel.toMap());
    }
    return list;
  }
  //delete doc

//delete document
  static Future<int> deletedoc(String id, String collection) async {
    int ishere = await checkdocstatus(collection, id);
    if (ishere == 0) {
      await firestoreInstance.collection(collection).doc(id).delete();
    }
    return ishere;
  }
}
