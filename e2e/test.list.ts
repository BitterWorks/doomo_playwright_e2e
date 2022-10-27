import { test } from "@playwright/test"

import agentFlow from './agentFlow.spec'
import agentDelete from './agentDelete.spec'
import franchiseeFlow from './franchiseeFlow.spec'
import franchiseeDelete from './franchiseeDelete.spec'

test.describe(agentFlow)
test.describe(franchiseeFlow)
test.describe(agentDelete)
test.describe(franchiseeDelete)