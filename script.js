var images = ["https://as2.ftcdn.net/jpg/01/15/47/87/500_F_115478791_GG0yIcVA8Mhe6MAXEvgcfyL7JtuVfYvm.jpg", "https://www.how-to-draw-funny-cartoons.com/images/cartoon-dad-005.jpg", "https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-boy-images-7.jpg", "https://previews.123rf.com/images/tigatelu/tigatelu1307/tigatelu130700004/20754296-cute-boy-cartoon-standing.jpg", "family.png"];
var names = ["Mom", "Dad", "Me", "Elder Brother", "Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}
