import 'package:flutter/cupertino.dart';
import 'package:youtube_player_flutter/youtube_player_flutter.dart';

class YTplayer extends StatefulWidget {
  final String link;

  const YTplayer({Key? key, required this.link}) : super(key: key);

  @override
  _YTplayerState createState() => _YTplayerState();
}

class _YTplayerState extends State<YTplayer> {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: YoutubePlayer(
            bottomActions: [],
            topActions: [],
            controller: YoutubePlayerController(
              initialVideoId:
                  YoutubePlayer.convertUrlToId(widget.link).toString(),
              flags: YoutubePlayerFlags(
                autoPlay: false,
                disableDragSeek: true,
                mute: false,
                enableCaption: false,
                isLive: false,
              ),
            )));
  }
}
