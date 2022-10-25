import 'package:fab_circular_menu/fab_circular_menu.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:projectasianmart/ui_components/constansts.dart';
import 'package:url_launcher/url_launcher.dart';

class Floatingactmenu extends StatelessWidget {
  const Floatingactmenu({
    Key? key,
    required this.size,
  }) : super(key: key);

  final Size size;

  @override
  Widget build(BuildContext context) {
    return FabCircularMenu(
      ringColor: kprimarylightcolor, // Colors.white,
      ringDiameter: size.width * 0.8,
      ringWidth: size.width * 0.2,
      fabColor: Colors.green,
      fabSize: size.width * 0.18,
      fabOpenIcon: Icon(Icons.phone),
      children: <Widget>[
        GestureDetector(
          onTap: () async {
            String url = "tel:0783080158";
            if (!await launch(url)) throw 'Could not launch $url';
          },
          child: SvgPicture.asset(
            "assets/icons/phoneicon.svg",
            width: size.width * 0.14,
          ),
        ),
        GestureDetector(
            onTap: () async {
              String url = "mailto:supunnilakshana@gmail.com";
              if (!await launch(url)) throw 'Could not launch $url';
            },
            child: Image.asset(
              "assets/icons/emailicon.png",
              width: size.width * 0.14,
            )),
        GestureDetector(
          onTap: () async {
            var whatsapp = "+94763080158";
            var whatsappURl_android =
                "whatsapp://send?phone=" + whatsapp + "&text= ";
            if (await canLaunch(whatsappURl_android)) {
              await launch(whatsappURl_android);
            } else {
              ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: new Text("whatsapp no installed")));
            }

            // String url = "whatsapp:0763080158";
            // if (!await launch(url)) throw 'Could not launch $url';
          },
          child: SvgPicture.asset(
            "assets/icons/whtappicon.svg",
            width: size.width * 0.17,
          ),
        ),
      ],
    );
  }
}
