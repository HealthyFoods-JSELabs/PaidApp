import 'package:flutter/material.dart';

import 'constansts.dart';

class Textfiledcontainer extends StatelessWidget {
  final Widget child;
  const Textfiledcontainer({
    Key? key,
    required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      width: size.width * 0.6,
      margin: EdgeInsets.symmetric(vertical: 10),
      padding: EdgeInsets.symmetric(
          horizontal: size.width * 0.03, vertical: size.height * 0.003),
      decoration: BoxDecoration(
          color: kprimarylightcolor, borderRadius: BorderRadius.circular(29)),
      child: child,
    );
  }
}
