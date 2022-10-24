import { expect, Page } from '@playwright/test';
import { IListing } from '../config/interfaces';
import AdminNavbarPage from '../pages/admin-navbar-page';
import ListingsPage from '../pages/listings-page';

async function editListing(listingPage: ListingsPage, listingsNavBarPage: AdminNavbarPage, editedListingsPage: ListingsPage) {

  await listingsNavBarPage.selector.click();
  await listingPage.editListingButton.click()
  await editedListingsPage.operationTypeRadioButtonEDIT.click();
  await editedListingsPage.currencyRadioButton.check();
  await editedListingsPage.priceInput.fill(editedListingsPage.listing.price);
  await editedListingsPage.titleInput.fill(editedListingsPage.listing.title);
  await editedListingsPage.descriptionInput.fill(editedListingsPage.listing.description);
  await editedListingsPage.saveChangesButton.click();
  await editedListingsPage.closeModalButton.click();
}

export default editListing