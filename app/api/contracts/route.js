// © 2025 Yehuda Saadia — All Rights Reserved. Unauthorized copying or distribution prohibited.
// SERVER ONLY

import { NextResponse } from 'next/server';
import { CONTRACTS, CONTRACT_GROUPS, CONTRACT_ENTITLEMENTS } from '../../../lib/contracts.js';

export const dynamic = 'force-dynamic';

/**
 * GET /api/contracts
 * Returns only UI-safe metadata — NO salary values exposed.
 */
export async function GET() {
  const meta = {};

  for (const [id, c] of Object.entries(CONTRACTS)) {
    meta[id] = {
      name: c.name,
      shortName: c.shortName,
      color: c.color,
      btnActive: c.btnActive,
      accent: c.accent,
      number: c.number,
      pensionEmployee: c.pensionEmployee,
      pensionEmployer: c.pensionEmployer,
      studyFundEmployee: c.studyFundEmployee,
      studyFundEmployer: c.studyFundEmployer,
      // grades: only id and label — no salary values
      grades: c.grades.map(g => ({ id: g.id, label: g.label })),
    };
  }

  return NextResponse.json(
    {
      contracts: meta,
      groups: CONTRACT_GROUPS,
      entitlements: CONTRACT_ENTITLEMENTS,
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    }
  );
}
