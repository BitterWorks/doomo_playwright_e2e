import { IListing } from '../config/interfaces';
import AdminNavbarPage from '../pages/admin-navbar-page';
import ListingsPage from '../pages/listings-page';

async function createListing(listingPage: ListingsPage, listingsNavBarPage: AdminNavbarPage) {

  await listingsNavBarPage.selector.click();
  await listingPage.newListingButton.click();
  await listingPage.selectProperty.click();
  await listingPage.selectPropertyOption.click();
  await listingPage.operationTypeRadioButton.check();
  await listingPage.currencyRadioButton.check();
  await listingPage.priceInput.fill(listingPage.listing.price);
  await listingPage.titleInput.fill(listingPage.listing.title);
  await listingPage.descriptionInput.fill(listingPage.listing.description);
  await listingPage.createListingButton.click();
  await listingPage.closeModalButton.click();
}

export default createListing