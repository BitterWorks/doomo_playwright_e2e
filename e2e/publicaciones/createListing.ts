import { IListing } from '../interfaces.d';
import AdminNavbarPage from '../pages/admin-navbar-page';
import ListingsPage from '../pages/listings-page';

async function createListing(listingPage: ListingsPage, listingsNavBarPage: AdminNavbarPage, listing: IListing) {

  await listingsNavBarPage.selector.click();
  await listingPage.newListingButton.click();
  await listingPage.selectProperty.click();
  await listingPage.selectPropertyOption.click();
  await listingPage.operationTypeRadioButton.check();
  await listingPage.currencyRadioButton.check();
  await listingPage.priceInput.fill(listing.price);
  await listingPage.titleInput.fill(listing.title);
  await listingPage.descriptionInput.fill(listing.description);
  await listingPage.createListingButton.click();
  await listingPage.closeModalButton.click();
}

export default createListing