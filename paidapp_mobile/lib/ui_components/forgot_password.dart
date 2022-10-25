import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:lottie/lottie.dart';
import 'package:projectasianmart/ui_components/constansts.dart';
import 'package:projectasianmart/ui_components/customfloatingacyionbutton.dart';
import 'package:url_launcher/url_launcher.dart';

class Forgetpasswordscreen extends StatelessWidget {
  const Forgetpasswordscreen({
    Key? key,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
        appBar: AppBar(
          title: Center(
            child: Text(
              "Forgot password",
              style: TextStyle(
                  color: Colors.black.withOpacity(0.8),
                  fontSize: size.width * 0.05,
                  fontWeight: FontWeight.w700),
            ),
          ),
          elevation: 0,
          backgroundColor: Colors.white,
          iconTheme: IconThemeData(
            color: Colors.black, //change your color here
          ),
        ),
        backgroundColor: kprimarylightcolor,
        floatingActionButton: Floatingactmenu(size: size),
        body: SingleChildScrollView(
            child: Container(
          height: size.height,
          decoration: BoxDecoration(color: Colors.white),
          width: size.width,
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            Align(
              alignment: Alignment.topCenter,
              child: Text(
                "Please contact us immediately!!",
                style: TextStyle(
                    color: Colors.black.withOpacity(0.8),
                    fontSize: size.width * 0.055,
                    fontWeight: FontWeight.w700),
              ),
            ),
            SizedBox(
              height: size.height * 0.02,
            ),
            Container(
              child: Lottie.asset('assets/animation/contactus.json'),
              width: size.width * 0.98,
            ),
            SizedBox(
              height: size.height * 0.2,
            ),
          ]),
        )));
  }
}
