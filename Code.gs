function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('ลดขนาดรูปภาพ')
    .addMetaTag(
      'viewport',
      'width=device-width, initial-scale=1'
    );
}