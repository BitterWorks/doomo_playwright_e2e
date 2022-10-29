import { test } from "@playwright/test"

import agentFlow from './admin/agentFlow.spec'
import agentDelete from './admin/agentDelete.spec'
import franchiseeFlow from './admin/franchiseeFlow.spec'
import franchiseeDelete from './admin/franchiseeDelete.spec'
import franchiseeValidateAgent from './admin/franchiseeValidateAgent.spec'
import franchisorValidateAgent from './admin/franchisorValidateAgent.spec'
import franchisorValidateFranchisee from './admin/franchisorValidateFranchisee.spec'

test.describe(agentFlow)
test.describe(franchiseeFlow)
test.describe(agentDelete)
test.describe(franchiseeDelete)
test.describe(franchiseeValidateAgent)
test.describe(franchisorValidateAgent)
test.describe(franchisorValidateFranchisee)