import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseFieldProps {
  label: string;
  /** Field name — must match the schema key; used to link label+input. */
  name: string;
  required?: boolean;
  /** Validation message from React Hook Form. */
  error?: string;
  className?: string;
}

type InputFieldProps = BaseFieldProps &
  InputHTMLAttributes<HTMLInputElement> & { as?: "input" };
type TextareaFieldProps = BaseFieldProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

/**
 * Underline-style form field matching the design (bottom border only).
 *
 * Accessibility:
 * - htmlFor/id link the label to the control.
 * - Required fields get a red asterisk AND aria-required.
 * - Errors are linked via aria-describedby and announced with role="alert",
 *   so screen readers hear the message when validation fails.
 */
export function FormField(props: InputFieldProps | TextareaFieldProps) {
  const { label, name, required, error, className, ...rest } = props;
  const errorId = `${name}-error`;

  const controlClasses = cn(
    "w-full border-0 border-b bg-transparent px-0 py-2 text-sm text-maroon-950",
    "placeholder:text-maroon-950/35 focus:outline-none focus:ring-0",
    error ? "border-brick-500" : "border-maroon-950/25 focus:border-brick-500",
    "transition-colors"
  );

  return (
    <div className={cn("w-full", className)}>
      <label htmlFor={name} className="block text-sm font-bold text-maroon-950">
        {label} {required && <span className="text-brick-500">*</span>}
      </label>

      {props.as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={3}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(controlClasses, "mt-2 resize-none")}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={name}
          name={name}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(controlClasses, "mt-2")}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {error && (
        <p id={errorId} role="alert" className="mt-1 text-xs text-brick-500">
          {error}
        </p>
      )}
    </div>
  );
}