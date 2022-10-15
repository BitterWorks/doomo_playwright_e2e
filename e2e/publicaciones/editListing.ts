import { expect, Page } from '@playwright/test';
import { IListing } from '../interfaces.d';
import AdminNavbarPage from '../pages/admin-navbar-page';
import ListingsPage from '../pages/listings-page';

async function editListing(listingPage: ListingsPage, listingsNavBarPage: AdminNavbarPage, listing: IListing, editedListing: IListing) {

  await listingsNavBarPage.selector.click();
  await listingPage.editListingButton.click()
  listingPage.listing = editedListing
  await listingPage.operationTypeRadioButtonEDIT.click();
  await listingPage.currencyRadioButton.check();
  await listingPage.priceInput.fill(listing.price);
  await listingPage.titleInput.fill(listing.title);
  await listingPage.descriptionInput.fill(listing.description);
  await listingPage.saveChangesButton.click();
  await listingPage.closeModalButton.click();
}

export default editListing