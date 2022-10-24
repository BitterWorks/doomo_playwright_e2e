import { test } from "@playwright/test"

import agentFlow from './agentFlow.spec'
import agentDelete from './agentDelete.spec'
import francheseeFlow from './francheseeFlow.spec'
import francheseeDelete from './francheseeDelete.spec'

test.describe(agentFlow)
test.describe(francheseeFlow)
test.describe(agentDelete)
test.describe(francheseeDelete)