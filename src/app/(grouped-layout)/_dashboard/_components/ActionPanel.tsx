'use client';

import React from 'react';
import { FaFileAlt, FaChevronRight, FaRegComment } from 'react-icons/fa';
import Button from '@/components/buttons/Button';

interface ActionPanelProps {
    requestedDocs: { id: string; name: string; status: 'pending' | 'submitted' }[];
}

export default function ActionPanel({ requestedDocs }: ActionPanelProps) {
    return (
        <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl border border-navy/5 shadow-sm">
                <h3 className="text-lg font-playfair font-bold text-navy mb-4 flex items-center gap-2">
                    <FaFileAlt className="text-settley-primary" />
                    Requested Documents
                </h3>
                <div className="flex flex-col gap-3">
                    {requestedDocs.map((doc) => (
                        <div
                            key={doc.id}
                            className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-navy/20 transition-colors group cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${doc.status === 'pending' ? 'bg-amber-400' : 'bg-green-500'}`} />
                                <span className="text-sm font-medium text-navy">{doc.name}</span>
                            </div>
                            <FaChevronRight className="text-xs text-medium-grey group-hover:translate-x-1 transition-transform" />
                        </div>
                    ))}
                </div>
                {requestedDocs.length === 0 && (
                    <p className="text-sm text-settley-text italic">No pending documents at this time.</p>
                )}
            </div>

            <div className="bg-navy p-6 rounded-2xl text-white shadow-lg overflow-hidden relative">
                <div className="z-10 relative">
                    <h3 className="text-lg font-bold mb-2">Need Help?</h3>
                    <p className="text-navy-100 text-sm mb-4">Our analysts are usually available 9am-5pm EST.</p>
                    <Button
                        className="w-full bg-white text-navy hover:bg-white/90 border-0 flex items-center justify-center gap-2"
                    >
                        <FaRegComment />
                        Message Analyst
                    </Button>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            </div>
        </div>
    );
}
