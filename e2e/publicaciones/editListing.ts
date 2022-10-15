import { expect, Page } from '@playwright/test';
import { IListing } from '../interfaces.d';
import AdminNavbarPage from '../pages/admin-navbar-page';
import ListingsPage from '../pages/listings-page';

async function editListing(listingPage: ListingsPage, listingsNavBarPage: AdminNavbarPage) {

  await listingsNavBarPage.selector.click();
  await listingPage.editListingButton.click()
  await listingPage.operationTypeRadioButtonEDIT.click();
  await listingPage.currencyRadioButton.check();
  await listingPage.priceInput.fill(listingPage.listing.price);
  await listingPage.titleInput.fill(listingPage.listing.title);
  await listingPage.descriptionInput.fill(listingPage.listing.description);
  await listingPage.saveChangesButton.click();
  await listingPage.closeModalButton.click();
}

export default editListing