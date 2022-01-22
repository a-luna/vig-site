import type { PitchFx, PlayerBatStats, PlayerPitchStats, TeamBatStats, TeamPitchStats } from '$lib/api/types';

export type DummyStatTypes = 'pitchFx' | 'playerBatStats' | 'playerPitchStats' | 'teamBatStats' | 'teamPitchStats';
type StatTypes = PitchFx | PlayerBatStats | PlayerPitchStats | TeamBatStats | TeamPitchStats;

export function getDummyObject(type: DummyStatTypes): StatTypes {
	switch (type) {
		case 'pitchFx':
			return getDummyPitchFxData();
		case 'playerBatStats':
			return getDummyPlayerBatStats();
		case 'playerPitchStats':
			return getDummyPlayerPitchStats();
		case 'teamBatStats':
			return getDummyTeamBatStats();
		case 'teamPitchStats':
			return getDummyTeamPitchStats();
		default:
			return null;
	}
}

function getDummyPitchFxData(): PitchFx {
	return {
		bb_game_id: '',
		bbref_game_id: '',
		pitch_app_id: '',
		inning_id: '',
		at_bat_id: '',
		pitcher_id_mlb: 0,
		batter_id_mlb: 0,
		pitcher_id_bbref: '',
		batter_id_bbref: '',
		pitcher_team_id_bb: '',
		opponent_team_id_bb: '',
		p_throws: '',
		stand: '',
		pitch_id: 0,
		inning: 0,
		ab_total: 0,
		ab_count: 0,
		ab_id: 0,
		des: '',
		strikes: 0,
		balls: 0,
		basic_type: 'Z',
		pdes: '',
		mlbam_pitch_name: '',
		start_speed: 0,
		zone_location: 0,
		sz_top: 0,
		sz_bot: 0,
		pfx_x: 0,
		pfx_z: 0,
		x0: 0,
		y0: 0,
		z0: 0,
		vx0: 0,
		vy0: 0,
		vz0: 0,
		ax: 0,
		ay: 0,
		az: 0,
		px: 0,
		pz: 0,
		park_sv_id: '',
		plate_time: 0,
		extension: 0,
		break_angle: 0,
		break_length: 0,
		break_y: 0,
		spin_rate: 0,
		spin_direction: 0,
		launch_speed: 0,
		launch_angle: 0,
		total_distance: 0,
		trajectory: '',
		hardness: '',
		location: 0,
		coord_x: 0,
		coord_y: 0,
		game_start_time_utc: '',
		time_pitch_thrown_utc: '',
		game_start_time_est: '',
		time_pitch_thrown_est: '',
		seconds_since_game_start: 0,
		has_zone_location: 0,
		batter_did_swing: 0,
		batter_made_contact: 0,
		called_strike: 0,
		swinging_strike: 0,
		inside_strike_zone: 0,
		outside_strike_zone: 0,
		swing_inside_zone: 0,
		swing_outside_zone: 0,
		contact_inside_zone: 0,
		contact_outside_zone: 0,
		is_in_play: 0,
		is_ground_ball: 0,
		is_fly_ball: 0,
		is_line_drive: 0,
		is_popup: 0,
		is_hard_hit: 0,
		is_medium_hit: 0,
		is_soft_hit: 0,
		is_barreled: 0,
		is_final_pitch_of_ab: 0,
		ab_result_out: 0,
		ab_result_hit: 0,
		ab_result_single: 0,
		ab_result_double: 0,
		ab_result_triple: 0,
		ab_result_homerun: 0,
		ab_result_bb: 0,
		ab_result_ibb: 0,
		ab_result_k: 0,
		ab_result_hbp: 0,
		ab_result_error: 0,
		ab_result_sac_hit: 0,
		ab_result_sac_fly: 0,
		ab_result_unclear: 0,
		pitch_type_int: 0,
		pbp_play_result: '',
		pbp_runs_outs_result: '',
		is_sp: 0,
		is_rp: 0,
		is_patched: 0,
		is_invalid_ibb: 0,
		is_out_of_sequence: 0,
		is_out_of_boundary: false,
		pitcher_name: '',
		batter_name: '',
		runs_outs_result: '',
		runs_scored: 0,
		count: '',
		pitch_sequence: '',
		outs_before_play: 0,
		ab_outcome: ''
	};
}

function getDummyTeamBatStats(): TeamBatStats {
	return {
		year: 0,
		age: 0,
		team_id_bbref: '',
		player_team_id_bbref: '',
		opponent_team_id_bbref: '',
		is_starter: true,
		bat_order_list: [],
		bat_order_metrics: [],
		bat_order: '',
		def_position_list: [],
		def_position_metrics: [],
		def_position: '',
		mlb_id: 0,
		bbref_id: '',
		player_name: '',
		stint_number: 0,
		total_games: 0,
		total_games_started: 0,
		total_games_subbed: 0,
		percent_started: 0,
		percent_subbed: 0,
		avg: 0,
		obp: 0,
		slg: 0,
		ops: 0,
		iso: 0,
		bb_rate: 0,
		k_rate: 0,
		contact_rate: 0,
		plate_appearances: 0,
		at_bats: 0,
		hits: 0,
		runs_scored: 0,
		rbis: 0,
		bases_on_balls: 0,
		strikeouts: 0,
		doubles: 0,
		triples: 0,
		homeruns: 0,
		stolen_bases: 0,
		caught_stealing: 0,
		hit_by_pitch: 0,
		intentional_bb: 0,
		gdp: 0,
		sac_fly: 0,
		sac_hit: 0,
		total_pitches: 0,
		total_strikes: 0,
		wpa_bat: 0,
		wpa_bat_pos: 0,
		wpa_bat_neg: 0,
		re24_bat: 0,
		league: 'AL',
		division: 'W',
		changed_teams_midseason: false,
		all_stats_for_season: false,
		all_stats_for_stint: false,
		career_stats_all_teams: false,
		career_stats_for_team: false,
		total_seasons: 0,
		row_id: ''
	};
}

function getDummyTeamPitchStats(): TeamPitchStats {
	return {
		year: 0,
		age: 0,
		team_id_bbref: '',
		player_team_id_bbref: '',
		opponent_team_id_bbref: '',
		mlb_id: 0,
		bbref_id: '',
		player_name: '',
		stint_number: 0,
		total_games: 0,
		games_as_sp: 0,
		games_as_rp: 0,
		wins: 0,
		losses: 0,
		saves: 0,
		innings_pitched: 0,
		total_outs: 0,
		batters_faced: 0,
		runs: 0,
		runs_allowed: 0,
		earned_runs: 0,
		hits: 0,
		homeruns: 0,
		strikeouts: 0,
		bases_on_balls: 0,
		era: 0,
		whip: 0,
		k_per_nine: 0,
		bb_per_nine: 0,
		hr_per_nine: 0,
		k_per_bb: 0,
		k_rate: 0,
		bb_rate: 0,
		k_minus_bb: 0,
		hr_per_fb: 0,
		pitch_count: 0,
		strikes: 0,
		strikes_contact: 0,
		strikes_swinging: 0,
		strikes_looking: 0,
		ground_balls: 0,
		fly_balls: 0,
		line_drives: 0,
		unknown_type: 0,
		inherited_runners: 0,
		inherited_scored: 0,
		wpa_pitch: 0,
		re24_pitch: 0,
		league: 'AL',
		division: 'W',
		changed_teams_midseason: false,
		all_stats_for_season: false,
		all_stats_for_stint: false,
		career_stats_all_teams: false,
		career_stats_for_team: false,
		total_seasons: 0,
		row_id: ''
	};
}

function getDummyPlayerBatStats(): PlayerBatStats {
	return {
		bbref_game_id: '',
		player_id_mlb: 0,
		player_id_bbref: '',
		player_team_id_bbref: '',
		opponent_team_id_bbref: '',
		is_starter: 0,
		bat_order: 0,
		def_position: '',
		plate_appearances: 0,
		at_bats: 0,
		hits: 0,
		runs_scored: 0,
		rbis: 0,
		bases_on_balls: 0,
		strikeouts: 0,
		doubles: 0,
		triples: 0,
		homeruns: 0,
		stolen_bases: 0,
		caught_stealing: 0,
		hit_by_pitch: 0,
		intentional_bb: 0,
		gdp: 0,
		sac_fly: 0,
		sac_hit: 0,
		avg_to_date: 0,
		obp_to_date: 0,
		slg_to_date: 0,
		ops_to_date: 0,
		total_pitches: 0,
		total_strikes: 0,
		wpa_bat: 0,
		avg_lvg_index: 0,
		wpa_bat_pos: 0,
		wpa_bat_neg: 0,
		re24_bat: 0,
		extra_base_hits: 0,
		total_bases: 0,
		player_name: '',
		stat_line: ''
	};
}

function getDummyPlayerPitchStats(): PlayerPitchStats {
	return {
		bbref_game_id: '',
		player_id_mlb: 0,
		player_id_bbref: '',
		player_team_id_bbref: 'OAK',
		opponent_team_id_bbref: 'SEA',
		is_sp: 0,
		is_rp: 0,
		is_wp: 0,
		is_lp: 0,
		is_sv: 0,
		innings_pitched: 0,
		total_outs: 0,
		hits: 0,
		runs: 0,
		runs_allowed: 0,
		earned_runs: 0,
		bases_on_balls: 0,
		strikeouts: 0,
		homeruns: 0,
		batters_faced: 0,
		pitch_count: 0,
		strikes: 0,
		strikes_contact: 0,
		strikes_swinging: 0,
		strikes_looking: 0,
		ground_balls: 0,
		fly_balls: 0,
		line_drives: 0,
		unknown_type: 0,
		game_score: 0,
		inherited_runners: 0,
		inherited_scored: 0,
		wpa_pitch: 0,
		avg_lvg_index: 0,
		re24_pitch: 0,
		player_name: '',
		wins: 0,
		losses: 0,
		saves: 0,
		full_stat_line: '',
		summary_stat_line: '',
		csw: 0
	};
}
