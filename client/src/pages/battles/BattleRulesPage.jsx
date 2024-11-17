import React from 'react'
// Components
import { HelmetItem } from '../../components/utils/HelmetItem'
// Constants
import { CompanyName } from '../../utils/Constants'

function BattleRulesPage() {
  return (
    <>
    {/* Tab Data */}
    <HelmetItem PageName={'Battle'} desc={`Battle page of ${CompanyName}.`} />

    {/* Page */}
    <div>BattleRulesPage</div>
    </>
  )
}

export default BattleRulesPage