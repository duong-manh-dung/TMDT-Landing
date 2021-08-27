var input1 = document.getElementById('imageUpload1');
var input2 = document.getElementById('imageUpload2');
var input3 = document.getElementById('imageUpload3');

function readURL1(input1) {
  if (input1.files && input1.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#imagePreview1').css('background-image', 'url(' + e.target.result + ')');
      $('#imagePreview1').hide();
      $('#imagePreview1').fadeIn(650);
    }
    reader.readAsDataURL(input1.files[0]);
  }
}

function readURL2(input2) {
  if (input2.files && input2.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#imagePreview2').css('background-image', 'url(' + e.target.result + ')');
      $('#imagePreview2').hide();
      $('#imagePreview2').fadeIn(650);
    }
    reader.readAsDataURL(input2.files[0]);
  }
}

function readURL3(input3) {
  if (input3.files && input3.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#imagePreview3').css('background-image', 'url(' + e.target.result + ')');
      $('#imagePreview3').hide();
      $('#imagePreview3').fadeIn(650);
    }
    reader.readAsDataURL(input3.files[0]);
  }
}

$("#imageUpload1").change(function() {
  readURL1(this);
});

$("#imageUpload2").change(function() {
  readURL2(this);
});

$("#imageUpload3").change(function() {
  readURL3(this);
});
