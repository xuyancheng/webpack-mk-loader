<div class ="layer">
  <img src="${require('../../assets/360.jpg')}">
	<div>this is <%= name %> layer</div>
	<% for (i=0; i<arr.length; i++){ %>
      <%= arr[i] %>   
	<% } %>
</div>