package com.project.work_hive.payloads;

public enum BugStatus {
    REPORTED("Reported"),
    ASSIGNED("Assigned"),
    IN_PROGRESS("In Progress"),
    FIXED("Fixed"),
    VERIFIED("Verified"),
    WONT_FIX("Won't Fix");

    private final String displayName;

    BugStatus(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}