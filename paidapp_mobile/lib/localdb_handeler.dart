import 'package:path/path.dart';
import 'package:projectasianmart/models/cart_model.dart';
import 'package:projectasianmart/models/logingmodel.dart';
import 'package:sqflite/sqflite.dart';

class LocaldbHandeler {
  Future<Database> initializeDB() async {
    String path = await getDatabasesPath();
    return openDatabase(
      join(path, 'asianmart.db'),
      onCreate: (database, version) async {
        await database.execute(
          "CREATE TABLE cart(id INTEGER PRIMARY KEY AUTOINCREMENT, pid TEXT NOT NULL, pname TEXT NOT NULL, quantity INTEGER NOT NULL, price REAL NOT NULL, image TEXT)",
        );
        await database.execute(
          "CREATE TABLE user(id INTEGER PRIMARY KEY AUTOINCREMENT, mobile TEXT NOT NULL, uid INTEGER NOT NULL)",
        );
      },
      version: 1,
    );
  }

  Future<int> insertitem(Cartmodel cmodel) async {
    int result = 0;
    final Database db = await initializeDB();

    result = await db.insert('cart', cmodel.toMap());

    return result;
  }

  Future<List<Cartmodel>> getallcartitem() async {
    final Database db = await initializeDB();
    final List<Map<String, Object?>> queryResult = await db.query('cart');
    return queryResult.map((e) => Cartmodel.fromMap(e)).toList();
  }

  Future<void> deleteitem(int id) async {
    final db = await initializeDB();
    await db.delete(
      'cart',
      where: "id = ?",
      whereArgs: [id],
    );
  }

  Future<void> clearallcart() async {
    final db = await initializeDB();
    await db.delete(
      'cart',
    );
  }

  Future<int> cartitemcount() async {
    int result = 0;
    final Database db = await initializeDB();

    result =
        Sqflite.firstIntValue(await db.rawQuery('SELECT COUNT(*) FROM cart'))!;

    return result;
  }

  Future<int> insertUser(Userlocalmodel umodel) async {
    int result = 0;
    final Database db = await initializeDB();

    result = await db.insert('user', umodel.toMap());

    return result;
  }

  Future<void> clearlogin() async {
    final db = await initializeDB();
    await db.delete(
      'user',
    );
  }

  Future<List<Userlocalmodel>> getuser() async {
    final Database db = await initializeDB();
    final List<Map<String, Object?>> queryResult = await db.query('user');
    return queryResult.map((e) => Userlocalmodel.fromMap(e)).toList();
  }

  Future<int> islogin() async {
    int result = 0;
    final Database db = await initializeDB();

    result =
        Sqflite.firstIntValue(await db.rawQuery('SELECT COUNT(*) FROM user'))!;

    return result;
  }
}
