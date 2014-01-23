<div class="expense-item">
	<div class="amount"><%- data.amount %></div>
	<div class="category-icon"
	     style="border-color: <%= data.category.color %>"
	     data-title="<%= data.category.title %>"></div>
	<div class="options-wrapper">
	    <div class="arrow"></div>
	    <div class="options">
	        <div class="option edit">Edit</div>
	        <div class="option delete">Delete</div>
	    </div>
	</div>
	<div class="title"><%- data.title %></div>
	<div class="date"><%- data.date %></div>
</div>