import { test } from "@playwright/test"

import editProfileAgent from './admin/editProfileAgent.spec'
import editProfileFranchisee from './admin/editProfileFranchisee.spec'
import agentLogin from './admin/agentLogin.spec'
import agentFlow from './admin/agentFlow.spec'
import agentDelete from './admin/agentDelete.spec'
import franchiseeFlow from './admin/franchiseeFlow.spec'
import franchiseeDelete from './admin/franchiseeDelete.spec'
import franchisorFlow from './admin/franchisorFlow.spec'
import franchiseeValidateAgent from './admin/franchiseeValidateAgent.spec'
import franchisorValidateAgent from './admin/franchisorValidateAgent.spec'
import franchisorValidateFranchisee from './admin/franchisorValidateFranchisee.spec'
import agentCreateMultipleListings from './admin/agentCreateMultipleListings.spec'
import agentCreateMultipleProperties from './admin/agentCreateMultipleProperties.spec'
import agentCreateMultipleClients from './admin/agentCreateMultipleClients.spec'
import home from './portal/home'

// Login
test.describe(agentLogin)

// Admin
// test.describe(editProfileAgent)
// test.describe(editProfileFranchisee)

test.describe(agentFlow)
test.describe(franchiseeFlow)

// NO VE NADA SUS PROPIOS CLIENTES
// test.describe(franchisorFlow)

// Roles
// test.describe(franchiseeValidateAgent)

// NO VE NADA DE LOS DEMAS
// test.describe(franchisorValidateAgent)
// test.describe(franchisorValidateFranchisee)

// Portal
// test.describe(home)


// Admin
// test.describe(agentDelete)
// test.describe(franchiseeDelete)

// Fixtures
test.describe(agentCreateMultipleClients)
// test.describe(agentCreateMultipleProperties)
// test.describe(agentCreateMultipleListings)