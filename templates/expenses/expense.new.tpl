<div class="input-container">
    <input tabindex="1" type="text" id="expense-new-amount" placeholder="Amount"/>
    <select tabindex="2" id="expense-new-category">
        <option value="">Select Category...</option>
        <% _.each(categories, function(category){  %>
            <option data-color="<%= category.color %>" value="<%= category.title%>"><%= category.title %></option>
        <%}); %>
    </select>
    <input tabindex="3" type="text" id="expense-new-title" placeholder="Title..."/>
    <input type="text" id="expense-new-date" placehoder="Date"/>
</div>

<div class="button-container">
    <button id="expense-new-save" class="button">
        <div class="button-icon">
            <svg viewBox="0 0 32 32">
                <use xlink:href="#check"></use>
            </svg>
        </div>
        save
    </button>
    <button id="expense-new-clear" class="button">
        <div class="button-icon">
            <svg viewBox="0 0 32 32">
                <use xlink:href="#close"></use>
            </svg>
        </div>
        clear
    </button>
</div>

