function sleep(waitSec, callback) {
  setTimeout(callback, waitSec);
};
client.on("message", (message) => {
  if (message.author.id == "302050872383242240") {//Disbordのみに反応
    if (
      message.embeds[0].description.match(/表示順をアップしたよ/) ||
      message.embeds[0].description.match(/Bump done/)
    ) {//言葉を検知
      message.channel.send({
        embed: {
color: "RANDOM",//embedの色
          title:
            "DISBOARDからBumpしたことを受信しました！",

        },//表示
      });
      sleep(60000 * 120, function () {
        message.channel.send({
          embed: {
color: "RANDOM",//同じく
            title:
              "Bumpのお時間です。",

          },//同じく
        });
      });
    }
  }
});
