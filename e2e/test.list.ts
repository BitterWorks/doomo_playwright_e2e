import { test } from "@playwright/test"

import agentFlow from './admin/agentFlow.spec'
import agentDelete from './admin/agentDelete.spec'
import franchiseeFlow from './admin/franchiseeFlow.spec'
import franchiseeDelete from './admin/franchiseeDelete.spec'
import franchiseeValidateAgent from './admin/franchiseeValidateAgent.spec'
import franchisorValidateAgent from './admin/franchisorValidateAgent.spec'
import franchisorValidateFranchisee from './admin/franchisorValidateFranchisee.spec'
import home from './portal/home'

// Admin
test.describe(agentFlow)
test.describe(franchiseeFlow)
test.describe(franchiseeValidateAgent)
test.describe(franchisorValidateAgent)
test.describe(franchisorValidateFranchisee)

// Portal
test.describe(home)


// Admin
test.describe(agentDelete)
test.describe(franchiseeDelete)