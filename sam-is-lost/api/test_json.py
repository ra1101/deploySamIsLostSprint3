#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
from unittest import TestCase
from api.cli import createEntry, getEntry, deleteEntry
import requests

def createData():
    data = {
        "id": "abc",
        "entryDate": "1/1/1970",
        "entryTime": "12:00 AM",
        "sightingDate": "1/1/1970",
        "sightingTime": "12:00 AM",
        "timeZone": 'America/New_York',
        "type": "dog",
        "sightedLocation": "123 Main St, Boston, MA 12345",
        "currentLocation": "unknown",
        "title": "testing",
        "description": "testing"
    }
    return data


class TestAPI(TestCase):
    def test_create_entry(self):
        """
        Ensure that the API accurately updates with test case entry
        """
        data = createData()
        r = createEntry(data)
        self.assertEqual(r.status_code, 201)
        deleteEntry(data['id'])

    def test_delete_entry(self):
        """
        Ensure that the API deletes an entry based on ID
        """
        data = createData()
        createEntry(data)
        d = deleteEntry(data['id'])
        self.assertEqual(d.status_code, requests.codes.ok)

    def test_cannot_retrieve(self):
        """
        Ensure that the API cannot retrieve the entry based on ID before creation
        """
        data = createData()
        g = getEntry(data['id'])
        self.assertNotEqual(g.status_code, requests.codes.ok)

    def test_get_entry(self):
        """
        Ensure that the API can query an entry based on ID
        """
        data = createData()
        createEntry(data)
        g = getEntry(data['id'])
        self.assertEqual(g.status_code, requests.codes.ok)
        deleteEntry(data['id'])

    def test_duplicate_entry(self):
        data = createData()
        s = createEntry(data)
        r = createEntry(data)
        self.assertNotEqual(r.status_code, requests.codes.ok)
        deleteEntry(data['id'])