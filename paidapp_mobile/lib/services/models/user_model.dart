class UserModel {
  final String email;
  final String name;
  final String sid;
  final String date;

  UserModel({
    required this.email,
    required this.name,
    required this.sid,
    required this.date,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      email: json["email"] ?? "",
      name: json["name"] ?? "",
      sid: json["sid"] ?? "",
      date: json["date"] ?? "",
    );
  }

  Map<String, dynamic> toMap() {
    return {'email': email, 'name': name, 'sid': name, 'date': date};
  }
}
