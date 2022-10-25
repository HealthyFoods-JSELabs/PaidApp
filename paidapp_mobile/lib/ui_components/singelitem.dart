import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:projectasianmart/data_handeler/constdata.dart';
import 'package:projectasianmart/data_handeler/localdb_handeler.dart';
import 'package:projectasianmart/models/cart_model.dart';
import 'package:projectasianmart/network/networkhandeler.dart';
import 'package:projectasianmart/screens/home/home.dart';
import 'package:projectasianmart/ui_components/internet_not_connect.dart';
import 'package:projectasianmart/ui_components/tots.dart';
import 'package:cached_network_image/cached_network_image.dart';

import 'buttons.dart';
import 'constansts.dart';

class SingleItem extends StatefulWidget {
  final String pid;
  final String titel;
  final double price;
  final double preprice;
  final double discount;
  final String imgname;
  final bool status;

  const SingleItem({
    Key? key,
    required this.titel,
    required this.price,
    required this.discount,
    required this.imgname,
    required this.pid,
    required this.preprice,
    required this.status,
  }) : super(key: key);

  @override
  _SingleItemState createState() => _SingleItemState();
}

class _SingleItemState extends State<SingleItem> {
  late bool isdiscount;

  @override
  Widget build(BuildContext context) {
    if (widget.discount > 0) {
      isdiscount = true;
    } else {
      isdiscount = false;
    }
    Size size = MediaQuery.of(context).size;

    return Container(
      width: size.width * 0.3,
      // height: size.height * 0.2,

      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Expanded(
            child: Container(
              child: Padding(
                  padding: EdgeInsets.all(size.height * 0.0012),
                  child: CachedNetworkImage(
                    imageUrl: fiximagelink + widget.imgname,
                    progressIndicatorBuilder:
                        (context, url, downloadProgress) => Container(
                      //  height: size.height * 0.01,
                      child: Center(
                        child: CircularProgressIndicator(
                            color: Colors.blueGrey,
                            value: downloadProgress.progress),
                      ),
                    ),
                    errorWidget: (context, url, error) => Icon(Icons.error),
                  )), // Image.network(fiximagelink + widget.imgname)
            ),
          ),
          Padding(
            padding: EdgeInsets.only(bottom: size.height * 0.002),
            child: Text(
              widget.titel,
              style:
                  TextStyle(color: Colors.black87, fontWeight: FontWeight.bold),
            ),
          ),
          Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            Text(
              widget.price.toStringAsFixed(0) + "₩",
              style: TextStyle(
                  color: Colors.redAccent, fontWeight: FontWeight.bold),
            ),
            SizedBox(
              width: size.width * 0.01,
            ),
            isdiscount
                ? Text(widget.preprice.toStringAsFixed(0) + "₩",
                    style: TextStyle(
                        color: Colors.black54,
                        fontWeight: FontWeight.bold,
                        decoration: TextDecoration.lineThrough))
                : SizedBox(
                    width: size.width * 0.0,
                  ),
          ]),
          //Customtost.commontost("THis item out of stock", Colors.amber);
          widget.status
              ? Iconbutton(
                  bicon: Icon(Icons.shopping_cart),
                  onpress: () async {
                    bool isconnect = await NetworkHandeler.hasNetwork();
                    var localdbhadeler = LocaldbHandeler();
                    if (isconnect == true) {
                      Cartmodel c = Cartmodel(
                          pid: widget.pid,
                          pname: widget.titel,
                          quantity: 1,
                          price: (widget.price),
                          imgname: widget.imgname);
                      await localdbhadeler.insertitem(c);
                      print("added");
                      Customtost.cartadd();
                    } else {
                      Navigator.pushReplacement(
                          context,
                          MaterialPageRoute(
                              builder: (context) =>
                                  NointernetScreen(pushscreen: Home())));
                    }
                  },
                  fontsize: size.width * 0.03,
                  text: "Add ",
                  pbottom: 0,
                  ptop: 0,
                  pleft: size.width * 0.058,
                  pright: size.width * 0.058,
                )
              : Genaralbutton(
                  // bicon: Icon(Icons.shopping_cart_outlined),
                  onpress: () {
                    Customtost.commontost(
                        "This item out of stock", Colors.amber);
                  },
                  fontsize: size.width * 0.028,
                  text: "Out of stock ",
                  pbottom: 0,
                  ptop: 0,
                  pleft: size.width * 0.058,
                  pright: size.width * 0.058,
                  color: Colors.redAccent,
                )
        ],
      ),
    );
  }
}
