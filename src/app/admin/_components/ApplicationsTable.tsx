'use client';

import React from 'react';
import TableContainer from '@/components/table';
import { ApplicationStatus } from '@/app/(grouped-layout)/_dashboard/_components/StatusTimeline';
import StatusBadge from './StatusBadge';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';

interface ApplicationSummary {
    id: string;
    address: string;
    owner: string;
    valueEstimate: string;
    status: ApplicationStatus;
    daysPending: number;
}

interface ApplicationsTableProps {
    applications: ApplicationSummary[];
}

const headers = ['Property Address', 'Owner', 'Est. Value', 'Status', 'Days Pending', 'Action'];

export default function ApplicationsTable({ applications }: ApplicationsTableProps) {
    return (
        <TableContainer headers={headers} containerClassName="rounded-xl border border-navy/5 shadow-sm overflow-hidden">
            {applications.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0 group">
                    <td className="py-4 px-6 text-sm font-semibold text-navy">
                        {app.address}
                    </td>
                    <td className="py-4 px-6 text-sm text-settley-text">
                        {app.owner}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-navy">
                        {app.valueEstimate}
                    </td>
                    <td className="py-4 px-6">
                        <StatusBadge status={app.status} />
                    </td>
                    <td className="py-4 px-6 text-sm">
                        <span className={app.daysPending > 7 ? "text-red-600 font-bold" : "text-settley-text"}>
                            {app.daysPending}d
                        </span>
                    </td>
                    <td className="py-4 px-6">
                        <Link
                            href={`/admin/applications/${app.id}`}
                            className="p-2 bg-navy/5 text-navy hover:bg-navy hover:text-white rounded-lg transition-all flex items-center justify-center w-fit"
                        >
                            <FaEye />
                        </Link>
                    </td>
                </tr>
            ))}
        </TableContainer>
    );
}
