<div class="expense-item" >
    <div class="amount"><%- data.amount %></div>
    <div class="category-icon"
         style="border-color: <%= data.category.color %>"
         data-title="<%= data.category.title %>"></div>
    <div class="options-wrapper">
        <div class="arrow"></div>
        <div class="options">
            <div class="option edit">
                <div class="icon">
                    <svg viewBox="0 0 48 48">
                        <use xlink:href="#edit"></use>
                    </svg>
                </div>
                Edit
            </div>
            <div class="option delete">
                <div class="icon">
                    <svg viewBox="0 0 48 48">
                        <use xlink:href="#close"></use>
                    </svg>
                </div>
                Delete
            </div>
        </div>
    </div>
    <div class="title"><%- data.title %></div>
    <div class="date"><%- data.date %></div>
</div>