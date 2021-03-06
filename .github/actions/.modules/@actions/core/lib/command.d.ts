interface CommandProperties {
    [key: string]: string;
}
/**
 * Commands
 *
 * Command Format:
 *   ##[name key=value;key=value]message
 *
 * Examples:
 *   ##[warning]This is the user warning message
 *   ##[set-secret name=mypassword]definitelyNotAPassword!
 */
export declare function issueCommand(command: string, properties: CommandProperties, message: string): void;
export declare function issue(name: string, message?: string): void;
export {};
