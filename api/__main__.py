import argparse
from api.cli import main

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "action", help="Action to take on the API (create, get or delete)"
    )
    parser.add_argument(
        "--sightingDate", help="Date the animal was seen, format mm/dd/yyyy", default="01/01/1970"
    )
    parser.add_argument(
        "--sightingTime", help="Time the animal was seen, format HH:mm AM/PM", default="12:00 AM"
    )
    parser.add_argument(
        "--type", help="Type of animal seen (dog, cat, reptile, bird, wolf, other", default="other"
    )
    parser.add_argument(
        "--sightedLocation", help="Location where the animal was sighted last", default="unknown"
    )
    parser.add_argument(
        "--currentLocation", help="Current location of the animal", default="unknown"
    )
    parser.add_argument(
        "--title", help="Short title of the animal seen", default="unknown"
    )
    parser.add_argument(
        "--description", help="Full description of the animal", default="unknown"
    )
    parser.add_argument(
        "--id", help="ID to query or delete", default="unknown"
    )

    args = parser.parse_args()

    main(args)