import React from 'react';
import Link from 'next/link'

function ThingsCard({ text, imageSource, path = '' }) {
    // export default function ThingsCard({ text, path = "/" }) {
    return (
        <div className="thingsCard">
            <a href={path}>{text}</a>
            <img src={imageSource} alt="PHOTO" />
        </div>
    )
}

export default ThingsCard;