import 'package:fab_circular_menu/fab_circular_menu.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:projectasianmart/ui_components/customfloatingacyionbutton.dart';
import 'package:url_launcher/url_launcher.dart';

class Testscreen1 extends StatefulWidget {
  @override
  _Testscreen1State createState() => _Testscreen1State();
}

class _Testscreen1State extends State<Testscreen1>
    with SingleTickerProviderStateMixin {
  late Animation<double> _animation;
  late AnimationController _animationController;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
        floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,

        //Init Floating Action Bubble
        floatingActionButton: Floatingactmenu(size: size));
  }
}
