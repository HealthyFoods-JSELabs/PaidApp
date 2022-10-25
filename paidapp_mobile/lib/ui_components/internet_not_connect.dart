import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:projectasianmart/network/networkhandeler.dart';
import 'package:projectasianmart/screens/home/home.dart';

class NointernetScreen extends StatelessWidget {
  final Widget pushscreen;

  const NointernetScreen({Key? key, required this.pushscreen})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Scaffold(
      body: Container(
        width: size.width,
        height: size.height,
        child: Column(
          children: [
            Container(
              child: Lottie.asset('assets/animation/nointernet1.json'),
            ),
            Padding(
              padding: EdgeInsets.only(
                bottom: size.height * 0.018,
              ),
              child: GestureDetector(
                onTap: () async {
                  bool isconnect = await NetworkHandeler.hasNetwork();
                  if (isconnect == true) {
                    Navigator.pushReplacement(context,
                        MaterialPageRoute(builder: (context) => pushscreen));
                  } else {}
                },
                child: Text.rich(
                  TextSpan(
                    text: 'Please connect to internet and ',
                    style: TextStyle(
                        color: Colors.black.withOpacity(.8),
                        fontSize: size.width * 0.037,
                        fontWeight: FontWeight.normal), // default text style
                    children: <TextSpan>[
                      TextSpan(
                        text: 'tap ',
                        style: TextStyle(
                            fontSize: size.width * 0.04,
                            fontWeight: FontWeight.bold),
                      ),
                      TextSpan(
                        text: 'to reaload',
                        style: TextStyle(
                            fontSize: size.width * 0.037,
                            fontWeight: FontWeight.normal),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
          mainAxisAlignment: MainAxisAlignment.center,
        ),
      ),
    );
  }
}
