import AdminNavbarPage from '../pages/admin-navbar-page';
import ListingsPage from '../pages/listings-page';

async function validateListing(listingsNavBarPage: AdminNavbarPage, editedListingsPage: ListingsPage) {

  await listingsNavBarPage.selector.click();
  await editedListingsPage.otherAgentsCheckBox.check()
  await editedListingsPage.filterApplyButton.click()
  await editedListingsPage.editListingButton.click()
  await editedListingsPage.closeModalButton.click();
}

export default validateListing