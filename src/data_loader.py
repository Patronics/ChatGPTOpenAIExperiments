import random


class DataLoader:
    """Loads and preprocesses data for the language model."""

    def __init__(self):
        self.data = []

    def load_data(self):
        """Loads and preprocesses the data.

        Returns:
            A list of strings, where each string is a training example.
        """
        # Load and preprocess data
        with open("data/chat.txt", "r") as f:
            data = f.readlines()
            data = [x.strip() for x in data]

        # Shuffle data
        random.shuffle(data)

        return data
