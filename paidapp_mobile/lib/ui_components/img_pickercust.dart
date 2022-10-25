import 'dart:io';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:projectasianmart/ui_components/constansts.dart';

class CustomImgpicker extends StatefulWidget {
  final ValueChanged<String> onimgfileChanged;
  const CustomImgpicker({
    Key? key,
    required this.onimgfileChanged,
  }) : super(key: key);
  @override
  _CustomImgpickerState createState() => _CustomImgpickerState();
}

class _CustomImgpickerState extends State<CustomImgpicker> {
  final ImagePicker _picker = ImagePicker();

  XFile? _image;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      child: Column(
        children: <Widget>[
          SizedBox(
            height: size.height * 0.01,
          ),
          Center(
            child: GestureDetector(
              onTap: () {
                _showPicker(context);
              },
              child: Padding(
                padding: EdgeInsets.all(size.width * 0.08),
                child: _image != null
                    ? ClipRRect(
                        borderRadius: BorderRadius.circular(size.width * 0.01),
                        child: Image.file(
                          File(_image!.path),
                          width: size.width * 0.65,
                          //  height: size.height * 0.06,
                          fit: BoxFit.fitHeight,
                        ),
                      )
                    : Container(
                        decoration: BoxDecoration(
                            color: kprimaryColor,
                            borderRadius:
                                BorderRadius.circular(size.width * 0.01)),
                        width: size.width * 0.59,
                        height: size.height * 0.06,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              Icons.image,
                              color: Colors.white,
                            ),
                            Text(
                              "Choose Address Image",
                              style: TextStyle(
                                  color: Colors.white,
                                  fontSize: size.width * 0.039),
                            ),
                          ],
                        ),
                      ),
              ),
            ),
          )
        ],
      ),
    );
  }

  _imgFromCamera() async {
    XFile? image =
        await _picker.pickImage(source: ImageSource.camera, imageQuality: 50);

    setState(() {
      _image = image;

      File imageFile = new File(_image!.path);
      List<int> imageBytes = imageFile.readAsBytesSync();
      // String base64Image = base64Encode(imageBytes);
      String base64Image = Base64Encoder().convert(imageBytes);

      widget.onimgfileChanged(base64Image);
    });
  }

  _imgFromGallery() async {
    XFile? image =
        await _picker.pickImage(source: ImageSource.gallery, imageQuality: 50);

    setState(() {
      _image = image;
      File imageFile = new File(_image!.path);
      List<int> imageBytes = imageFile.readAsBytesSync();
      String base64Image = Base64Encoder().convert(imageBytes);

      widget.onimgfileChanged(base64Image);
    });
  }

  void _showPicker(context) {
    showModalBottomSheet(
        context: context,
        builder: (BuildContext bc) {
          return SafeArea(
            child: Container(
              child: new Wrap(
                children: <Widget>[
                  new ListTile(
                      leading: new Icon(Icons.photo_library),
                      title: new Text('Photo Library'),
                      onTap: () {
                        _imgFromGallery();
                        Navigator.of(context).pop();
                      }),
                  new ListTile(
                    leading: new Icon(Icons.photo_camera),
                    title: new Text('Camera'),
                    onTap: () {
                      _imgFromCamera();
                      Navigator.of(context).pop();
                    },
                  ),
                ],
              ),
            ),
          );
        });
  }
}
