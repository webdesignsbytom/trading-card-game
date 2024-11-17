import React from 'react';
// Components
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';
// Data
import {
  battleRulesPageAdditionalMeta,
  battleRulesPageStructuredData,
} from '../../utils/data/PageData';

function BattleRulesPage() {
  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName='Battle Rules'
        desc={`Learn about the battle rules and guidelines in ${CompanyName}.`}
        keywords={`battle rules, gameplay rules, ${CompanyName}, game guidelines`}
        additionalMeta={battleRulesPageAdditionalMeta}
        structuredData={battleRulesPageStructuredData}
      />

      {/* Page */}
      <div>BattleRulesPage</div>
    </>
  );
}

export default BattleRulesPage;
