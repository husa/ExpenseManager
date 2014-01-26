    <div class="input-container">
        <label for="category-title">Select new category title and color</label>
        <input name="category-title" type="text" id="add-category-input-title" placeholder="Title..."
        /><select name="category-select-color" id="add-category-select-color">
             <% _.each(colors, function(color, i){ %>
                <option data-color="<%= color %>" value="<%= color %>">&nbsp;</option>
            <% }); %>
        </select>
    </div>

    <div class="buttons-container">
        <button id="add-category-save" class="button">
            <div class="button-icon">
                <svg viewBox="0 0 32 32">
                    <use xlink:href="#check"></use>
                </svg>
            </div>
            save
        </button>
        <button id="add-category-cancel" class="button">
            <div class="button-icon">
                <svg viewBox="0 0 32 32">
                    <use xlink:href="#trash"></use>
                </svg>
            </div>
            cancel
        </button>
    </div>
