import 'package:flutter/material.dart';
import 'package:is_first_run/is_first_run.dart';

class TestSceen5 extends StatefulWidget {
  TestSceen5({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  _TestSceen5State createState() => _TestSceen5State();
}

class _TestSceen5State extends State<TestSceen5> {
  bool? _isFirstRun;
  bool? _isFirstCall;

  void _checkFirstRun() async {
    bool ifr = await IsFirstRun.isFirstRun();
    setState(() {
      _isFirstRun = ifr;
    });
  }

  void _checkFirstCall() async {
    bool ifc = await IsFirstRun.isFirstCall();
    setState(() {
      _isFirstCall = ifc;
    });
  }

  void _reset() async {
    await IsFirstRun.reset();
    _checkFirstRun();
    _checkFirstCall();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              ElevatedButton(
                  child: Text('Check first run'), onPressed: _checkFirstRun),
              ElevatedButton(
                  child: Text('Check first call'), onPressed: _checkFirstCall),
              ElevatedButton(child: Text('Reset'), onPressed: _reset),
              SizedBox(height: 24),
              Text(
                  'Is first run: ${_isFirstRun != null ? _isFirstRun : 'Unknown'}'),
              Text(
                  'Is first call: ${_isFirstCall != null ? _isFirstCall : 'Unknown'}'),
            ]),
      ),
    );
  }
}
