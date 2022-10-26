class FuelModel {
  final String id;
  final String vnumber;
  final int ftype;
  final double amount;
  final String stationid;
  final String stationname;
  final String fueleddate;
  final String fueledtime;
  final String cdatetime;
  final String edatetime;

  FuelModel(
      {required this.id,
      required this.vnumber,
      required this.amount,
      required this.ftype,
      required this.stationid,
      required this.stationname,
      required this.fueleddate,
      required this.fueledtime,
      required this.cdatetime,
      this.edatetime = ""});

  Map<String, dynamic> toMap() => {
        "id": id,
        "vnumber": vnumber,
        "amount": amount,
        "ftype": ftype,
        "stationid": stationid,
        "stationname": stationname,
        "fueledDate": fueleddate,
        "fueledtime": fueledtime,
        "cdatetime": cdatetime,
        "edatetime": edatetime,
      };

  FuelModel.fromMap(Map<dynamic, dynamic> map)
      : id = map["id"],
        vnumber = map["vnumber"] as String,
        amount = map["amount"] as double,
        ftype = map["ftype"] as int,
        stationid = map["stationid"] as String,
        stationname = map["stationname"] as String,
        fueleddate = map["fueledDate"] as String,
        fueledtime = map["fueledtime"] as String,
        cdatetime = map["cdatetime"] as String,
        edatetime = map["edatetime"] ?? "";
}
