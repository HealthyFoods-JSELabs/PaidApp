import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:projectasianmart/data_handeler/localdb_handeler.dart';
import 'package:projectasianmart/models/cart_model.dart';
import 'package:projectasianmart/models/productmodel.dart';

import 'package:projectasianmart/screens/commonscreen/orderdetails.dart';
import 'package:projectasianmart/ui_components/tots.dart';
import 'package:url_launcher/url_launcher.dart';

import 'constansts.dart';
import 'p_v_slider.dart';

class Singelitemfull extends StatefulWidget {
  final Productmodel product;
  const Singelitemfull({
    Key? key,
    required this.imglist,
    required this.product,
  }) : super(key: key);

  final List<Widget> imglist;

  @override
  _SingelitemfullState createState() => _SingelitemfullState();
}

class _SingelitemfullState extends State<Singelitemfull> {
  List<Cartmodel> cartdata = [];
  double total = 0.0;
  int itemquantity = 1;
  late bool isdiscount;
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    if (widget.product.discount > 0) {
      isdiscount = true;
    } else {
      isdiscount = false;
    }
    return Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          title: Text(
            widget.product.name,
            style: TextStyle(
                color: kprimaryColor,
                fontWeight: FontWeight.bold,
                fontSize: size.width * 0.06),
          ),
          elevation: 0,
          backgroundColor: Colors.white,
          iconTheme: IconThemeData(
            color: Colors.black, //change your color here
          ),
          centerTitle: true,
        ),
        floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
        floatingActionButton: Wrap(
          //will break to another line on overflow
          direction: Axis.horizontal, //use vertical to show  on vertical axis
          children: <Widget>[
            Container(
                margin: EdgeInsets.all(10),
                child: FloatingActionButton.extended(
                    heroTag: "btn1",
                    backgroundColor: Colors.deepOrangeAccent,
                    onPressed: () async {
                      print("pressed");
                      senddata().whenComplete(() => Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => Orderdetails(
                                    total: total,
                                    orderlist: cartdata,
                                  ))));
                    },
                    label: Text("Buy It Now"))),
            // button third//button first

            // button second

            Container(
                margin: EdgeInsets.all(10),
                child: FloatingActionButton.extended(
                    heroTag: "btn2",
                    backgroundColor: Colors.green,
                    onPressed: () async {
                      var localdbhadeler = LocaldbHandeler();
                      Cartmodel c = Cartmodel(
                          pid: widget.product.product_id,
                          pname: widget.product.name,
                          quantity: itemquantity,
                          price: (widget.product.price),
                          imgname: widget.product.image);
                      await localdbhadeler.insertitem(c);
                      print("added");
                      Customtost.cartadd();
                    },
                    label: Text("Add to cart"))),
            // button third

            // Add more buttons here
          ],
        ),
        body: SingleChildScrollView(
          child: Column(
            children: [
              SizedBox(
                height: size.height * 0.01,
                width: size.width,
              ),
              PVslider(list: widget.imglist),
              SizedBox(
                height: size.height * 0.01,
                width: size.width,
              ),
              Align(
                alignment: Alignment.topLeft,
                child: Padding(
                  padding: EdgeInsets.symmetric(horizontal: size.width * 0.05),
                  child: Row(children: [
                    Text(
                      widget.product.price.toStringAsFixed(0) + "₩",
                      style: TextStyle(
                          color: Colors.redAccent,
                          fontWeight: FontWeight.bold,
                          fontSize: size.width * 0.05),
                    ),
                    SizedBox(
                      width: size.width * 0.05,
                    ),
                    isdiscount
                        ? Text(widget.product.preprice.toStringAsFixed(0) + "₩",
                            style: TextStyle(
                                fontSize: size.width * 0.05,
                                color: Colors.black38,
                                fontWeight: FontWeight.bold,
                                decoration: TextDecoration.lineThrough))
                        : SizedBox(
                            width: size.width * 0.0,
                          ),
                  ]),
                ),
              ),
              SizedBox(
                height: size.height * 0.03,
              ),
              Align(
                alignment: Alignment.topLeft,
                child: Padding(
                  padding: EdgeInsets.symmetric(horizontal: size.width * 0.05),
                  child: Text(widget.product.description,
                      style: TextStyle(
                        fontSize: size.width * 0.04,
                        color: Colors.black54,
                        fontWeight: FontWeight.bold,
                      )),
                ),
              ),
              SizedBox(
                height: size.height * 0.03,
              ),
              Row(
                children: [
                  SizedBox(
                    width: size.width * 0.6,
                  ),
                  Text("Quantity  ",
                      style: TextStyle(
                        fontSize: size.width * 0.04,
                        color: Colors.black54,
                        fontWeight: FontWeight.bold,
                      )),
                  Container(
                    width: size.width * 0.19,
                    padding: EdgeInsets.all(size.width * 0.007),
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(size.width * 0.01),
                        color: Color(0xFF039e1a)),
                    child: Row(
                      children: [
                        InkWell(
                            onTap: () {
                              if (itemquantity > 0) {
                                setState(() {
                                  itemquantity--;
                                });
                              }
                            },
                            child: Icon(
                              Icons.remove,
                              color: Colors.white,
                              size: size.width * 0.04,
                            )),
                        Container(
                          width: size.width * 0.075,
                          margin: EdgeInsets.symmetric(
                              horizontal: size.width * 0.007),
                          padding: EdgeInsets.symmetric(
                              horizontal: size.width * 0.007,
                              vertical: size.width * 0.005),
                          decoration: BoxDecoration(
                              borderRadius:
                                  BorderRadius.circular(size.width * 0.007),
                              color: Colors.white),
                          child: Text(
                            itemquantity.toString(),
                            style: TextStyle(
                                color: Colors.black,
                                fontSize: size.width * 0.04),
                          ),
                        ),
                        InkWell(
                            onTap: () {
                              if (itemquantity < 1000) {
                                setState(() {
                                  itemquantity++;
                                });
                              }
                            },
                            child: Icon(
                              Icons.add,
                              color: Colors.white,
                              size: size.width * 0.04,
                            )),
                      ],
                    ),
                  ),
                ],
              ),
              SizedBox(
                height: size.height * 0.03,
              ),
              Card(
                color: kprimarylightcolor,
                child: GestureDetector(
                  onTap: () async {
                    String url = widget.product.vlink2;
                    if (!await launch(url)) throw 'Could not launch $url';
                  },
                  child: ListTile(
                      contentPadding: EdgeInsets.symmetric(
                          horizontal: 20.0, vertical: 10.0),
                      leading: Container(
                        padding: EdgeInsets.only(right: 12.0),
                        decoration: BoxDecoration(
                            border: Border(
                                right: BorderSide(
                                    width: 1.0, color: Colors.white24))),
                        child: Icon(Icons.play_circle_filled,
                            color: Colors.blueGrey),
                      ),
                      title: Text(
                        "How to use",
                        style: TextStyle(
                            color: Colors.black54,
                            fontWeight: FontWeight.bold,
                            fontSize: size.width * 0.06),
                      ),
                      // subtitle: Text("Intermediate", style: TextStyle(color: Colors.white)),

                      trailing: Icon(Icons.keyboard_arrow_right,
                          color: Colors.black54, size: 30.0)),
                ),
              )
            ],
          ),
        ));
  }

  senddata() async {
    Cartmodel c = Cartmodel(
        pid: widget.product.product_id,
        pname: widget.product.name,
        quantity: itemquantity,
        price: (widget.product.price),
        imgname: widget.product.image);

    cartdata.add(c);
    total = (widget.product.price) * itemquantity;
  }
}
