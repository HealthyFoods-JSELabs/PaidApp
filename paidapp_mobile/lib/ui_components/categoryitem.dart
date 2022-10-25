import 'package:flutter/material.dart';

import 'constansts.dart';

class CategoryItem extends StatelessWidget {
  const CategoryItem({
    Key? key,
    required this.imgsrc,
    required this.label,
  }) : super(key: key);

  final String imgsrc;
  final String label;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      child: Column(children: [
        Padding(
          padding: EdgeInsets.only(bottom: size.height * 0.008),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(8.0),
            child: Image.asset(
              imgsrc,
              width: size.width * 0.155,
              height: size.width * 0.155,
            ),
          ),
        ),
        Text(
          label,
          style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black),
        )
      ]),
    );
  }
}
