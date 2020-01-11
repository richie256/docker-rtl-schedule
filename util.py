import json
import os
from typing import Optional


def settings_from_file(filename: str, config: dict = None) -> Optional[str]:
    """Reads/writes json from/to a filename."""
    if config:
        # We're writing configuration
        try:
            with open(filename, "w") as fdesc:
                fdesc.write(json.dumps(config))
                return True
        except IOError as error:
            _LOGGER.exception(error)
            return False
    else:
        # We're reading config
        if os.path.isfile(filename):
            try:
                with open(filename, "r") as fdesc:
                    return json.loads(fdesc.read())
            except IOError as error:
                _LOGGER.exception(error)
                return False
        else:
            return {}
