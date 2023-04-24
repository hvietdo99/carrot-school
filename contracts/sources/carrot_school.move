// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

module headmaster::carrot_school {
    // Part 1: imports
    use std::string::{utf8, String};
    use std::vector as vec;

    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use sui::object_table::{Self, ObjectTable};
    use std::option::{Self, Option};
    use sui::dynamic_object_field as dof;
    use sui::clock::{Self, Clock};
    use sui::url::{Self, Url};
    use sui::package;
    use sui::display;

    use headmaster::random;

    // Errors
    const ENotOwner: u64 = 0;
    const EChapterExists: u64 = 1;
    const EChapterNotExist: u64 = 2;
    const EChapterNotStart: u64 = 2;
    const EQuizNotExist: u64 = 3;
    const EStudentRegistered: u64 = 4;
    const EOutOfAttempts: u64 = 5;
    const EWrongAttempt: u64 = 7;

    const TEN_MINUTES: u64 = 600000;

    // Part 2: Struct definitions
    struct CARROT_SCHOOL has drop {}

    struct HeadmasterCap has key, store {
        id: UID,
        admin: address,
    } 

    // ======= Students =======
    struct AchievementToken has key {
        id: UID,
        image_url: Url,
        img_url: Url,
        url: Url,
        student: address,
        chapter: u64,
        score: u64 // Score = actual score * chapter + chapter
    }

    struct MergedAchievementToken has key, store {
        id: UID,
        chapter: u64,
        score: u64
    }

    struct StudentInfo has key {
        id: UID,
        image_url: Url,
        img_url: Url,
        url: Url,
        student: address,
        total_score: u64,
        total_quizzes: u64
    }

    struct StudentRegistration has key, store {
        id: UID,
        student: address,
        total_score: u64,
        total_quizzes: u64
    }

    struct Attempt has key {
        id: UID,
        student: address,
        chapter_number: u64,
        attempt_number: u64,
        start_time_ms: u64,
        end_time_ms: u64,
        question_indexes: vector<u64>
    }

    // ======= Quizzes =======
    struct Participant has key, store {
        id: UID,
        student: address,
        highest_score: u64,
        attempts: u64
    }

    struct QA has key, store {
        id: UID,
        index: u64,
        chapter: u64,
        question: String,
        answers: vector<String>,
        correct_answer: u64 // correct_answer = actual correct_answer * index + chapter
    }

    struct Chapter has key, store {
        id: UID,
        name: String,
        chapter_number: u64,
        start_time_ms: u64,
        total_questions: u64,
        total_participants: u64,
        quizzes: ObjectTable<u64, QA>
    }

    struct Quizzes has key, store {
        id: UID,
        total_chapters: u64,
        total_questions: u64,
        total_participants: u64,
        chapters: ObjectTable<u64, Chapter>
    }

    // Part 3: module initializer to be executed when this module is published
    fun init(otw: CARROT_SCHOOL, ctx: &mut TxContext) {
        // Display for Profile Certificate
        let keys_1 = vector[
            utf8(b"name"),
            utf8(b"image_url"),
            utf8(b"description"),
            utf8(b"project_url"),
        ];

        let values_1 = vector[
            utf8(b"Profile Certificate - {student}"),
            utf8(b"{image_url}"),
            // Description is static for all `BeLaunchNFT` objects.
            utf8(b"Profile Certificate from Carrot School - Golden board honors excellent student {student}."),
            // Project URL is usually static
            utf8(b"https://funnyybuns.com/"),
        ];

        // Display for Achievement Token
        let keys_2 = vector[
            utf8(b"name"),
            utf8(b"image_url"),
            utf8(b"description"),
            utf8(b"project_url"),
        ];

        let values_2 = vector[
            utf8(b"Achievement Token - Chapter {chapter}"),
            utf8(b"{image_url}"),
            // Description is static for all `BeLaunchNFT` objects.
            utf8(b"A non-transferable Achievement Token to certify the score obtained for participating in the Quiz in chapter {chapter}."),
            // Project URL is usually static
            utf8(b"https://funnyybuns.com/"),
        ];

        // Claim the `Publisher` for the package!
        let publisher = package::claim(otw, ctx);

        // Get a new `Display` object for the `StudentInfo` type.
        let display_1 = display::new_with_fields<StudentInfo>(
            &publisher, keys_1, values_1, ctx
        );
        let display_2 = display::new_with_fields<AchievementToken>(
            &publisher, keys_2, values_2, ctx
        );

        // Commit first version of `Display` to apply changes.
        display::update_version(&mut display_1);
        display::update_version(&mut display_2);

        let owner = tx_context::sender(ctx);
        transfer::public_transfer(publisher, owner);
        transfer::public_transfer(display_1, owner);
        transfer::public_transfer(display_2, owner);

        transfer::transfer(
            HeadmasterCap {
                id: object::new(ctx),
                admin: owner,
            },
            owner
        );

        abort 0
    }

    /// User methods
    fun burn_achievement_token(token: AchievementToken) {
        let AchievementToken { id, image_url: _, img_url: _, url: _, student: _, chapter: _, score: _ } = token;
        object::delete(id)
    }

    fun set_option_u64(
        option_u64: Option<u64>,
        value: u64
    ) {
        if (option::is_none(&option_u64)) {
            option::fill<u64>(&mut option_u64, value);
        } else {
            option::swap<u64>(&mut option_u64, value);
        }
    }

    public entry fun merge_achievement_token(
        student: &mut StudentInfo,
        token: AchievementToken,
        ctx: &mut TxContext
    ) {
        abort 0
    }

    public entry fun mint_student_info(
        quizzes: &mut Quizzes,
        ctx: &mut TxContext
    ) {
        abort 0
    }

    public entry fun quiz_participate(
        student: &mut StudentInfo,
        attempt: &Attempt,
        quizzes: &mut Quizzes,
        clock: &Clock,
        chapter_number: u64,
        indexes: vector<u64>,
        answers: vector<u64>,
        ctx: &mut TxContext
    ) {
        abort 0
    }

    // Headmaster methods
    fun burn_question(question: QA) {
        let QA { id, index: _, chapter: _, question: _, answers: _, correct_answer: _ } = question;
        object::delete(id)
    }

    fun burn_chapter(chapter: Chapter) {
        let Chapter { id, name: _, chapter_number: _, start_time_ms: _, total_questions: _, total_participants: _, quizzes } = chapter;
        object::delete(id);
        transfer::public_freeze_object(quizzes);
    }

    // ======= Question management =======
    public entry fun add_questions(
        _admin: &HeadmasterCap,
        quizzes: &mut Quizzes,
        chapter_number: u64,
        total_questions: u64,
        questions: vector<vector<u8>>,
        answers: vector<vector<vector<u8>>>,
        correct_answers: vector<u64>,
        ctx: &mut TxContext
    ) {
        abort 0
    }

    public entry fun delete_questions(
        _admin: &HeadmasterCap,
        quizzes: &mut Quizzes,
        chapter_number: u64,
        indexes: vector<u64>,
        _ctx: &mut TxContext
    ) {
        abort 0
    }

    // ======= Chapter management =======
    public entry fun add_chapter(
        _admin: &HeadmasterCap,
        quizzes: &mut Quizzes,
        chapter_name: vector<u8>,
        chapter_number: u64,
        start_time_ms: u64,
        ctx: &mut TxContext
    ) {
        abort 0
    }

    public entry fun delete_chapter(
        _admin: &HeadmasterCap,
        quizzes: &mut Quizzes,
        chapter_number: u64,
        _ctx: &mut TxContext
    ) {
        abort 0
    }

    // ======= Randomness =======
    public entry fun generate_random_numbers_for_an_attempt(
        _student: &mut StudentInfo,
        clock: &Clock,
        quizzes: &mut Quizzes,
        chapter_number: u64,
        ctx: &mut TxContext
    ) {
        abort 0
    }
}
        