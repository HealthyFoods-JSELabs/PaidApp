import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';

class PVslider extends StatelessWidget {
  const PVslider({
    Key? key,
    required this.list,
  }) : super(key: key);

  final List<Widget> list;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      child: CarouselSlider(
          options: CarouselOptions(
            height: size.height * 0.45,
            aspectRatio: 16 / 9,
            viewportFraction: 1,
          ),
          items: list),
    );
  }
}
