import { renderBlock } from './lib.js'

export function renderSearchFormBlock() {
  const currentDate = new Date().toISOString().slice(0, 10);
  const arrivalDate = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().slice(0, 10);
  const departureDate = new Date(new Date().setDate(new Date().getDate() + 3)).toISOString().slice(0, 10);
  const date = new Date();
  const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 2, +1);
  const lastDay = lastDayDate.toISOString().slice(0, 10);
  console.log(currentDate)
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${arrivalDate}" min="${currentDate}" max="${lastDay}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${departureDate}" min="${arrivalDate}" max="${lastDay}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
