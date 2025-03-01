'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import MarkdownEditor from '@uiw/react-markdown-editor'

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [pitch, setPitch] = useState(
        `# This is a H1  \n## This is a H2  \n###### This is a H6`,
    )

    return (
        <form action={() => {}} className="startup-form">
            <div>
                <label htmlFor="title" className="startup-form_label">
                    Title
                </label>
                <Input
                    id="title"
                    name="title"
                    className="startup-form_input"
                    required
                    placeholder="Startup Title"
                />

                {errors.title && (
                    <p className="startup-form_error">{errors.title}</p>
                )}
            </div>
            <div>
                <label htmlFor="description" className="startup-form_label">
                    Description
                </label>
                <Textarea
                    id="description"
                    name="description"
                    className="startup-form_textarea"
                    required
                    placeholder="Startup Description"
                />

                {errors.description && (
                    <p className="startup-form_error">{errors.description}</p>
                )}
            </div>
            <div>
                <label htmlFor="category" className="startup-form_label">
                    Category
                </label>
                <Input
                    id="category"
                    name="category"
                    className="startup-form_input"
                    required
                    placeholder="Startup Category (Tech, Health, Education...)"
                />

                {errors.category && (
                    <p className="startup-form_error">{errors.category}</p>
                )}
            </div>
            <div>
                <label htmlFor="link" className="startup-form_label">
                    Image URL
                </label>
                <Input
                    id="link"
                    name="link"
                    className="startup-form_input"
                    required
                    placeholder="Startup Image URL"
                />

                {errors.link && (
                    <p className="startup-form_error">{errors.link}</p>
                )}
            </div>
            <div data-color-mode="light">
                <label htmlFor="pitch" className="startup-form_label">
                    Pitch
                </label>
                <MarkdownEditor
                    value={pitch}
                    onChange={(value) => setPitch(value as string)}
                />

                {errors.pitch && (
                    <p className="startup-form_error">{errors.pitch}</p>
                )}
            </div>
        </form>
    )
}

export default StartupForm
