/**
 * Interface for getInput options
 */
export interface InputOptions {
    /** Optional. Whether the input is required. If required and not present, will throw. Defaults to false */
    required?: boolean;
}
/**
 * The code to exit an action
 */
export declare enum ExitCode {
    /**
     * A code indicating that the action was successful
     */
    Success = 0,
    /**
     * A code indicating that the action was a failure
     */
    Failure = 1
}
/**
 * sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable
 */
export declare function exportVariable(name: string, val: string): void;
/**
 * exports the variable and registers a secret which will get masked from logs
 * @param name the name of the variable to set
 * @param val value of the secret
 */
export declare function exportSecret(name: string, val: string): void;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
export declare function addPath(inputPath: string): void;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
export declare function getInput(name: string, options?: InputOptions): string;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store
 */
export declare function setOutput(name: string, value: string): void;
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
export declare function setFailed(message: string): void;
/**
 * Writes debug message to user log
 * @param message debug message
 */
export declare function debug(message: string): void;
/**
 * Adds an error issue
 * @param message error issue message
 */
export declare function error(message: string): void;
/**
 * Adds an warning issue
 * @param message warning issue message
 */
export declare function warning(message: string): void;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
export declare function startGroup(name: string): void;
/**
 * End an output group.
 */
export declare function endGroup(): void;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
export declare function group<T>(name: string, fn: () => Promise<T>): Promise<T>;
