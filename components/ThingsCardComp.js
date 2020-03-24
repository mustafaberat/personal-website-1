import React from 'react';
import Link from 'next/link'

function ThingsCard({ text, path = '#' }) {
    // export default function ThingsCard({ text, path = "/" }) {
    return (
        <a
            className="thingsCard"
            href={path}
        >
            {text}
        </a>
    )
}

export default ThingsCard;